export const formatDate = (input) => {
    // June 28, 2022
    const date = new Date(input);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};
