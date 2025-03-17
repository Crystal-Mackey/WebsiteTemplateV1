import heroImage from "./assets/images/hero.jpg";
import personalTrainingImage from "./assets/images/personal-training.jpg";
import groupClassesImage from "./assets/images/group-classes.jpg";
import nutritionImage from "./assets/images/nutrition.jpg";

const config = {
  heroTitle: "Welcome to Your Business!",
  heroSubtitle: "We provide the best services for your needs.",
  heroImage, // ✅ Use imported image
  services: [
    {
      title: "Personal Training",
      description: "One-on-one training sessions tailored to your goals.",
      image: personalTrainingImage, // ✅ Use imported image
      price: 50,
    },
    {
      title: "Group Classes",
      description: "Join our energetic group classes for all fitness levels.",
      image: groupClassesImage, // ✅ Use imported image
      price: 30,
    },
    {
      title: "Nutrition Counseling",
      description: "Get expert advice on creating a personalized nutrition plan.",
      image: nutritionImage, // ✅ Use imported image
      price: 75,
    },
  ],
  contactEmail: "contact@yourbusiness.com",
  socialLinks: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
};

export default config;
