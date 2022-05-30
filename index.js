let introMsgContainer = document.getElementById("intro-msg")
let introMsg = introMsgContainer.querySelector("article")
let detailsSection = document.getElementById("details-section")
let details = detailsSection.querySelectorAll("figure")
let productiveSection = document.getElementById("stay-productive")
let productiveImg = productiveSection.querySelector("img")
let productiveArticle = productiveSection.querySelector("article")
let commentSection = document.getElementById("users-comments-section")
let comments = commentSection.querySelectorAll("article")

function animateContent(target) {
	target.classList.add("animated-to-screen")
	target.classList.remove("visibility-if-just-loaded")
	observer.unobserve(target)			
}

let observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			animateContent(entry.target)
		}
	})
})

observer.observe(introMsg)
observer.observe(productiveImg)
observer.observe(productiveArticle)

for (let i=0, d=details.length; i < d; i++) {
	observer.observe(details[i])
}

for (let i=0, c=comments.length; i < c; i++) {
	observer.observe(comments[i])
}