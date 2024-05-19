import { BsCheck2Circle } from "react-icons/bs";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { TiStarOutline } from "react-icons/ti";
// import { useLocation } from "react-router-dom";

function ProblemDescription({ Problem }) {
  return (
    <div className="text-white  mr-0  bg-gray-600  bg-opacity-100 border">
      {/* TAB */}
      <div className="flex h-11 w-full rounded-tl-[5px]  items-center text-black  overflow-x-hidden overflow-y-hidden">
        <div
          className={
            "px-5 py-[10px] text-lg font-semibold cursor-pointer text-white"
          }
        >
          Description
        </div>
      </div>

      <div className="flex px-0 py-4 h-[calc(100vh-110px)] rounded-md overflow-y-auto">
        <div className="px-5">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg text-white font-medium">
                {Problem?.title}
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div
                className={`text-white inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
              >
                Easy
              </div>
              <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-white">
                <BsCheck2Circle />
              </div>
              <div className="flex items-center cursor-pointer hover:bg-gray-200 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-white">
                <AiFillLike />
                <span className="text-xs">120</span>
              </div>
              <div className="flex items-center cursor-pointer hover:bg-gray-200 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-white">
                <AiFillDislike />
                <span className="text-xs">2</span>
              </div>
              <div className="cursor-pointer hover:bg-gray-200  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-white hover:text-green-600 ">
                <TiStarOutline />
              </div>
            </div>

            {/* Problem Statement(paragraphs) */}
            <div
              className="text-white text-sm"
              dangerouslySetInnerHTML={{ __html: Problem?.problemStatement }}
            ></div>

            {/* Examples */}
            <div className="mt-4">
              {/* Example 1 */}

              {Problem.examples.map((item) => (
                <div key={item.id}>
                  <p className="font-medium text-white">Example {item.id}:</p>
                  <div className="example-card">
                    <pre>
                      <strong className="text-white">Input: </strong>
                      <span className="text-white">{item.inputText}</span>
                      <br />
                      <div>
                        <strong className="text-white">Output:</strong>{" "}
                        <span className="text-white">{item.outputText}</span>
                        <br />
                        <strong className="text-white">
                          Explanation:
                        </strong>{" "}
                        <span className="text-white">{item.explanation}</span>
                      </div>
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            {/* Constraints */}
            <div className="my-5">
              <div className="text-white text-sm font-medium">Constraints:</div>
              <ul
                className="text-white ml-5 list-disc"
                dangerouslySetInnerHTML={{ __html: Problem.constraints }}
              ></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProblemDescription;
