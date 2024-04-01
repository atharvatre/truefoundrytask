import React, { useState, useRef, useEffect } from "react";
import { MimicLogs } from "../api-mimic";
import rectangle from "../assets/Rectangle 193.png";
import Layout from "./Layout";
import { useParams } from "react-router-dom";
const Logs = () => {
  const params = useParams();
  console.log(params.timestamp);
  const [logs, setLogs] = useState([]);
  const [visible, setVisible] = useState(true);
  const terminalRef = useRef(null);

  const visibleHandler = () => {
    const scrolled = terminalRef.current.scrollTop;
    if (scrolled > 0) {
      setVisible(false);
    } else if (scrolled <= 0) {
      setVisible(true);
    }
  };

  window.addEventListener("scroll", visibleHandler);

  const scrollToBottom = () => {
    terminalRef.current.scrollTop =
      terminalRef.current.scrollHeight;
  };

  //window.addEventListener("scroll", visibleHandler);

  const startTs = Date.now() - params.timestamp;
  const endTs = Date.now();
  const limit = 180;
  var startDT = startTs;
  var d = new Date(startDT);
  var ds = d.toLocaleString();
  //alert(ds);
  //console.log(ds);
  var endDT = endTs;
  var e = new Date(endDT);
  var es = e.toLocaleString();
  //console.log(es);
  MimicLogs.fetchPreviousLogs({ startTs, endTs, limit })
    .then((data) => {
      setLogs(data);
      if (
        terminalRef.current.scrollHeight -
          terminalRef.current.clientHeight ===
        terminalRef.current.scrollTop
      ) {
        scrollToBottom();
      }
      //console.log("fetched logs", data);
    })
    .catch((error) => {
      "error fetching logs", error;
    });

  return (
    <Layout title={"logs"}>
      <div className=" p-2 m-2 rounded-md  ">
        <h1 className="p-2 text-sm text-right ">
          Showing logs for {ds} → {es}
        </h1>
        <div className="bg-gray-800 text-sm rounded-t-md text-gray-400 text-center mt-0 p-1">
          Loading previous logs
        </div>
        <div
          id="terminal"
          ref={terminalRef}
          className="bg-gray-900 rounded-t-none rounded-md mb-0 p-2 h-100  overscroll-none overflow-y-scroll relative"
        >
          {logs.map(function (index, i) {
            var logdate = index.timestamp;
            var date = new Date(logdate);
            var datest = date.toLocaleString();
            return (
              <div className="flex">
                <img
                  src={rectangle}
                  alt="bullet"
                  // height={4}
                  // width={2}
                  className="mb-2 mr-2 "
                />

                <li className="text-white flex" key={i}>
                  <div className="grid grid-flow-col gap-5">
                    <p className="text-xs text-gray-600 mt-2 mb-2">
                      {datest}
                    </p>

                    <p className="text-sm mb-2 mt-2 text-gray-400 ">
                      {index.message}
                    </p>
                  </div>
                </li>
              </div>
            );
          })}

          {visible && (
            <button
              className="absolute bottom-4 right-4  bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              onClick={scrollToBottom}
            >
              New Logs ↓
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Logs;
