export default function handler(req, res) {
    const faqs = [
      {
        question: "1. What measures will you take to keep my Android app idea confidential?",
        answer: "We are a reputed android application development company in the USA, and our coordinating team always signs an NDA for every project we undertake, keeping your idea and all other related details confidential.cloud, automation, and agile technologies to combat sophisticated threats and drive purposeful growth at speed and scale. Our actions mirror what we say."
      },
      {
        question: "2 .What measures will you take to keep my Android app idea confidential?",
        answer: "We are a reputed android application development company in the USA, and our coordinating team always signs an NDA for every project we undertake, keeping your idea and all other related details confidential.cloud, automation, and agile technologies to combat sophisticated threats and drive purposeful growth at speed and scale. Our actions mirror what we say."
      },
      {
        question: "3.What measures will you take to keep my Android app idea confidential?",
        answer: "We are a reputed android application development company in the USA, and our coordinating team always signs an NDA for every project we undertake, keeping your idea and all other related details confidential.cloud, automation, and agile technologies to combat sophisticated threats and drive purposeful growth at speed and scale. Our actions mirror what we say.."
      },
    ];
  
    res.status(200).json(faqs);
  }
  