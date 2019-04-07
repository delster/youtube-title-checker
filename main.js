document.addEventListener("DOMContentLoaded", () => {
  // Grab references to the DOM elements we'll be listening to.
  const userInputForm = document.querySelector(".userinput form")
  const thumbnailInput = userInputForm.querySelector(".userinput .thumbnail");
  const lengthInput = userInputForm.querySelector(".userinput .length");
  const titleInput = userInputForm.querySelector(".userinput .title");
  const channelInput = userInputForm.querySelector(".userinput .channel");
  const viewcountInput = userInputForm.querySelector(".userinput .viewcount");
  const uploadagoInput = userInputForm.querySelector(".userinput .uploadago");
  const upvotepctInput = userInputForm.querySelector(".userinput .upvotepct");

  // Create previews based on our form.
  Desktop(
    thumbnailInput,
    channelInput,
    lengthInput,
    titleInput,
    viewcountInput
  );
  SuggestedHome(
    thumbnailInput,
    lengthInput,
    titleInput,
    channelInput,
    viewcountInput,
    uploadagoInput,
    upvotepctInput
  );
  SuggestedSidebar(
    thumbnailInput,
    lengthInput,
    titleInput,
    channelInput,
    viewcountInput,
    upvotepctInput
  );

  // Prevent Form Submission (just in case..)
  userInputForm.addEventListener( "submit", e => e.preventDefault() )
});

const Desktop = (
  thumbnailInput,
  channelInput,
  lengthInput,
  titleInput,
  viewcountInput
) => {
  const desktopEl = document.querySelector(".desktop-full");
  const thumbnailOutput = desktopEl.querySelector(".thumbnail");
  const channelOutput = desktopEl.querySelector(".channel");
  const lengthOutput = desktopEl.querySelector(".length");
  const titleOutput = desktopEl.querySelector(".title");
  const viewcountOutput = desktopEl.querySelector(".viewcount");

  document.querySelector('form').addEventListener("input", e => console.log(e.target))
  thumbnailInput.addEventListener("input", e => { thumbnailOutput.src = e.target.value; });
  channelInput.addEventListener("input", e => { channelOutput.textContent = e.target.value; });
  lengthInput.addEventListener("input", e => { lengthOutput.textContent = e.target.value; });
  titleInput.addEventListener("input", e => { titleOutput.textContent = e.target.value; });
  viewcountInput.addEventListener("input", e => { viewcountOutput.textContent = e.target.value; });
};
const SuggestedHome = (
  thumbnailInput,
  lengthInput,
  titleInput,
  channelInput,
  viewcountInput,
  uploadagoInput,
  upvotepctInput
) => {
  const shomeEl = document.querySelector(".suggested > .home");
  const thumbnailOutput = shomeEl.querySelector(".thumbnail");
  const lengthOutput = shomeEl.querySelector(".length");
  const titleOutput = shomeEl.querySelector(".title");
  const channelOutput = shomeEl.querySelector(".channel");
  const viewcountOutput = shomeEl.querySelector(".viewcount");
  const uploadagoOutput = shomeEl.querySelector(".uploadago");
  const upvotepctOutput = shomeEl.querySelector(".upvotepct");

  thumbnailInput.addEventListener("input", e => { thumbnailOutput.src = e.target.value; });
  lengthInput.addEventListener("input", e => { lengthOutput.textContent = e.target.value; });
  titleInput.addEventListener("input", e => { titleOutput.textContent = e.target.value; });
  channelInput.addEventListener("input", e => { channelOutput.textContent = e.target.value; });
  viewcountInput.addEventListener("input", e => { viewcountOutput.textContent = e.target.value; });
  uploadagoInput.addEventListener("input", e => { uploadagoOutput.textContent = e.target.value; });
  upvotepctInput.addEventListener("input", e => { upvotepctOutput.textContent = e.target.value; });
};
const SuggestedSidebar = (
  thumbnailInput,
  lengthInput,
  titleInput,
  channelInput,
  viewcountInput,
  upvotepctInput
) => {
  const ssidebarEl = document.querySelector(".suggested > .sidebar");
  const thumbnailOutput = ssidebarEl.querySelector(".thumbnail");
  const lengthOutput = ssidebarEl.querySelector(".length");
  const titleOutput = ssidebarEl.querySelector(".title");
  const channelOutput = ssidebarEl.querySelector(".channel");
  const viewcountOutput = ssidebarEl.querySelector(".viewcount");
  const upvotepctOutput = ssidebarEl.querySelector(".upvotepct");

  thumbnailInput.addEventListener("input", e => { thumbnailOutput.src = e.target.value; })
  lengthInput.addEventListener("input", e => { lengthOutput.textContent = e.target.value; })
  titleInput.addEventListener("input", e => { titleOutput.textContent = e.target.value; })
  channelInput.addEventListener("input", e => { channelOutput.textContent = e.target.value; })
  viewcountInput.addEventListener("input", e => { viewcountOutput.textContent = e.target.value; })
  upvotepctInput.addEventListener("input", e => { upvotepctOutput.textContent = e.target.value; })
};
