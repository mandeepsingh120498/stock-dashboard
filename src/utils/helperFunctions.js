export const getRandomColor = () => {
    const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  };