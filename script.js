function TextareaChangesStyle() {
  document
    .getElementById("id_label_textarea")
    .classList.add("label_textarea_focus");
  document.getElementById("id_textarea").style =
    "height:150px;background: #ebf3ff; ";
  document.getElementById("borderId").classList.add("border_textarea_custom");
  document
    .getElementById("id_span_label")
    .classList.remove("span_label_textarea");
}

function TextareaEmpty() {
  if (document.getElementById("id_textarea").value.length === 0) {
    document
      .getElementById("id_label_textarea")
      .classList.remove("label_textarea_focus");
    document
      .getElementById("id_label_textarea")
      .classList.add("label_textarea");
    document.getElementById("id_textarea").style = "height:15px;";
    document
      .getElementById("borderId")
      .classList.remove("border_textarea_custom");
    document
      .getElementById("id_span_label")
      .classList.add("span_label_textarea");
  }
}
function LoadTextarea() {
  if (document.getElementById("id_textarea").value.length > 0) {
    document
      .getElementById("id_label_textarea")
      .classList.add("label_textarea_focus");
  } else {
    document
      .getElementById("id_label_textarea")
      .classList.add("label_textarea");
    document.getElementById("id_label_textarea").style.transition = "";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  LoadTextarea();
});
