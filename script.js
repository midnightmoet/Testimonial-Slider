const testimonials = [
    {
        name: "Cherise G.",
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        text: "This is simply unbelieveable! I would be lost without Apple.  The very best.  Not able to tell you how happy I am with Apple."
    },
    {
        name: "Lorrie M.",
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        text: "I would like to personally thank you for your outstanding product.  I am so pleased with this product.  I STRONGLY recommend Apple to EVERYONE interested in running a successful online business!"
    },
    {
        name: "Lorie M.",
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        text: "I would like to personally thank you for your outstanding product.  I am so pleased with this product.  I STRONGLY recommend Apple to EVERYONE interested in running a successful online business!"
    }
]

const imgEl = document.querySelector(".testimonial-photo");
const textEl = document.querySelector(".testimonial-text");
const usernameEl = document.querySelector(".testimonial-name");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name,photoUrl,text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerHTML = text;
    usernameEl.innerHTML = name;
    idx++;

    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 10000);
}