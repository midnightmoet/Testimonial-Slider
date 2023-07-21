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

let idx = 0;

function updateTestimonial(){
    const { name, photoUrl, text } = testimonials[idx];
    document.getElementById("testimonial-text").innerText = text;
    document.getElementById("testimonial-photo").src = photoUrl;
    document.getElementById("testimonial-name").innerText = name;
}