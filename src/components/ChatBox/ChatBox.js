import React from "react";

export const ChatBox = ({ text, error, username, handleTextChange }) => (
  <div>
    <div className="row">
      <div className="col-xs-12">
        <div className="chat">
          <div className="input-main ">
            <input
              type="text"
              value={text}
              placeholder="chat here..."
              className="form-control test-input"
              onChange={handleTextChange}
              onKeyDown={handleTextChange}
            />
            {error && !username && (
              <p className="text-danger"> Please add user</p>
            )}
          </div>

          {/* <div className="clearfix"></div> */}
        </div>
      </div>
    </div>
  </div>
);
