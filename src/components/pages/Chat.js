import React from 'react';

(function(d, m){
    var kommunicateSettings = {"appId":"5914b18ed100fa60cd76918f6e7a0a28","popupWidget":true,"automaticChatOpenOnNavigation":true};
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    window.kommunicate = m; m._globals = kommunicateSettings;
  })(document, window.kommunicate || {});
  
const Chat = () => {
    return (
        <div>
            
        </div>
    );
};

export default Chat;