const plans = [
    {
        price: "$10/month",
        features: ["Feature 1", "Feature 2", "Feature 3"],
        buttonText: "Choose Basic",
        onButtonClick: () => alert("Basic Plan Selected"),
    },
    {
        price: "$20/month",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        buttonText: "Choose Pro",
        onButtonClick: () => alert("Pro Plan Selected"),
    },
    {
        price: "$50/month",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
        buttonText: "Choose Enterprise",
        onButtonClick: () => alert("Enterprise Plan Selected"),
    },
];

export default plans;
