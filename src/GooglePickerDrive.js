import React, { Component } from "react";
import GooglePicker from "react-google-picker";

class GooglePickerDrive extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <GooglePicker
        clientId={
          "176467058854-pcmotttdsmqb59fp96n2j1fmr82meid6.apps.googleusercontent.com"
        }
        developerKey={"AIzaSyBk3d9cDv7t3r5o_MSb7Uy7NLMUlPZ6KWI"}
        scope={["https://www.googleapis.com/auth/drive.readonly"]}
        onChange={data => console.log("on change:", data)}
        onAuthFailed={data => console.log("on auth failed:", data)}
        multiselect={true}
        navHidden={true}
        authImmediate={false}
        viewId={"DOCS"}
        mimeTypes={["image/png", "image/jpeg", "image/jpg"]}
        createPicker={(google, oauthToken) => {
          const googleViewId = google.picker.ViewId.DOCS;
          const uploadView = new google.picker.DocsUploadView();
          const docsView = new google.picker.DocsView(googleViewId)
            .setIncludeFolders(true)
            .setSelectFolderEnabled(true);

          const picker = new window.google.picker.PickerBuilder()
            .enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED)
            .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
            .addView(docsView)
            .addView(uploadView) /*DocsUploadView added*/
            .setOAuthToken(oauthToken)
            .setDeveloperKey("AIzaSyBk3d9cDv7t3r5o_MSb7Uy7NLMUlPZ6KWI")
            .setCallback(data => {
              if (data.action == google.picker.Action.PICKED) {
                var fileId = data.docs[0].id;
                alert("The user selected: " + fileId);
                picker();
              }
            });
          picker.build().setVisible(true);
        }}
      >
        <span>Validate con tu cuenta google</span>
        <div className="google" />
      </GooglePicker>
    );
  }
}

export default GooglePickerDrive;
