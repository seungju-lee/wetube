import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const deleteTargetCommentList = document.querySelectorAll("delete__comment");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const decreaseNumber = ()=>{
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) -1;
}

const addComment = comment => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = comment;
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
};

const deleteComment = comment =>{
  commentList.removeChild(comment);
}

const sendComment = async comment => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment
    }
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};


const handleDeleteComment = async (event) => {
  event.preventDefault();
  const comment = event.target.parentNode;
  const id = event.target.dataset.id;
  const response = await axios({
    url: `/api/${videoId}/delete`,
    method: "POST",
    data: {
      id
    }
  });
  if (response.status === 200) {
    deleteComment(comment);
  }
}

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
  for(i=0; i < deleteTargetCommentList.length; i++){
    deleteTargetCommentList[i].addEventListener("click", handleDeleteComment);
  }
  
}

if (addCommentForm) {
  init();
}