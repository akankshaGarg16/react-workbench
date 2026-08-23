import React, { useCallback, useEffect, useRef, useState } from "react";

const CREATE_API = "https://api.restful-api.dev/objects";
const GET_API = (id) => `https://api.restful-api.dev/objects/${id}`;

const POLL_INTERVAL = 5000;
const MAX_POLLS = 20;

function App() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("idle");
  const [requestId, setRequestId] = useState(null);
  const [pollCount, setPollCount] = useState(0);
  const [message, setMessage] = useState("");

  const timerRef = useRef(null);
  const runIdRef = useRef(0);

  // Clear the currently scheduled GET request
  const clearPollingTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // STOP button
  const stopPolling = useCallback(() => {
    // Invalidate the current polling run
    runIdRef.current += 1;

    // Cancel the next scheduled GET
    clearPollingTimer();

    setStatus("stopped");
    setMessage("Processing stopped.");
  }, [clearPollingTimer]);

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      runIdRef.current += 1;
      clearPollingTimer();
    };
  }, [clearPollingTimer]);

  /*
   * This function performs the GET request.
   *
   * It is called ONLY after the POST has successfully
   * returned an ID.
   */
  const poll = useCallback(
    async (id, currentPoll, currentRunId) => {
      // User may have clicked STOP
      if (runIdRef.current !== currentRunId) {
        return;
      }

      try {
        console.log(
          `GET request ${currentPoll}/${MAX_POLLS} with ID:`,
          id
        );

        const response = await fetch(GET_API(id));

        if (!response.ok) {
          throw new Error(`GET failed with status ${response.status}`);
        }

        const data = await response.json();

        console.log("GET response:", data);

        if (runIdRef.current !== currentRunId) {
          return;
        }

        setPollCount(currentPoll);

        // We completed all 20 GET requests
        if (currentPoll >= MAX_POLLS) {
          setStatus("completed");
          setMessage("Processing completed.");
          clearPollingTimer();
          return;
        }

        setMessage(
          `Processing... GET ${currentPoll}/${MAX_POLLS}`
        );

        /*
         * Schedule the NEXT GET after 5 seconds.
         */
        timerRef.current = setTimeout(() => {
          poll(id, currentPoll + 1, currentRunId);
        }, POLL_INTERVAL);
      } catch (error) {
        if (runIdRef.current !== currentRunId) {
          return;
        }

        setStatus("error");
        setMessage(error.message);
        clearPollingTimer();
      }
    },
    [clearPollingTimer]
  );

  /*
   * SEND button
   */
  const handleSend = async () => {
    if (!value.trim()) {
      return;
    }

    // Cancel any previous timer
    clearPollingTimer();

    /*
     * Every click on SEND creates a completely
     * new run.
     */
    const currentRunId = runIdRef.current + 1;
    runIdRef.current = currentRunId;

    setStatus("processing");
    setRequestId(null);
    setPollCount(0);
    setMessage("Sending request...");

    try {
      /*
       * =================================================
       * CALL #1
       * POST API
       * =================================================
       */
      console.log("POST request");

      const response = await fetch(CREATE_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: value,
          data: {
            text: value,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(
          `POST failed with status ${response.status}`
        );
      }

      const data = await response.json();

      console.log("POST response:", data);

      /*
       * API gives us the unique ID.
       */
      const id = data.id;

      if (!id) {
        throw new Error("POST response did not contain an ID.");
      }

      if (runIdRef.current !== currentRunId) {
        return;
      }

      setRequestId(id);

      setMessage(
        `Request created. First GET will happen in 5 seconds.`
      );

      /*
       * =================================================
       * CALL #2
       *
       * DO NOT GET IMMEDIATELY.
       *
       * Wait 5 seconds first.
       * =================================================
       */
      timerRef.current = setTimeout(() => {
        poll(id, 1, currentRunId);
      }, POLL_INTERVAL);
    } catch (error) {
      if (runIdRef.current !== currentRunId) {
        return;
      }

      setStatus("error");
      setMessage(error.message);
      clearPollingTimer();
    }
  };

  const handleButtonClick = () => {
    if (status === "processing") {
      stopPolling();
    } else {
      handleSend();
    }
  };

  const sendDisabled =
    !value.trim() || status === "processing";

  return (
    <main className="page">
      <section className="card">
        <h1>React API Polling Demo</h1>

        <p className="description">
          Enter text, click Send, and poll the API every 5 seconds.
        </p>

        <div className="form-row">
          <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Enter something..."
            disabled={status === "processing"}
          />

          <button
            type="button"
            className={
              status === "processing"
                ? "stop-button"
                : "send-button"
            }
            disabled={status !== "processing" && sendDisabled}
            onClick={handleButtonClick}
          >
            {status === "processing" ? "Stop" : "Send"}
          </button>
        </div>

        <div className="status-box">
          <div>
            <strong>Status:</strong>{" "}
            <span className={`status ${status}`}>
              {status}
            </span>
          </div>

          {requestId && (
            <div>
              <strong>Request ID:</strong> {requestId}
            </div>
          )}

          {status === "processing" && (
            <div>
              <strong>Polls:</strong> {pollCount}/{MAX_POLLS}
            </div>
          )}

          {message && (
            <div className="message">
              {message}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;