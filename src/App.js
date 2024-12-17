import React from "react";

const findRoute = (tickets, start) => {
  const graph = {};
  tickets.forEach(([from, to]) => {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  });

  Object.keys(graph).forEach((city) => {
    graph[city].sort();
  });

  const route = [];
  const stack = [start];

  while (stack.length > 0) {
    const currentCity = stack[stack.length - 1];
    if (graph[currentCity] && graph[currentCity].length > 0) {
      stack.push(graph[currentCity].shift());
    } else {
      route.push(stack.pop());
    }
  }

  return route.reverse();
};

const App = () => {
  const tickets = [
    ["Paris", "Skopje"],
    ["Zurich", "Amsterdam"],
    ["Prague", "Zurich"],
    ["Barcelona", "Berlin"],
    ["Kiev", "Prague"],
    ["Skopje", "Paris"],
    ["Amsterdam", "Barcelona"],
    ["Berlin", "Kiev"],
    ["Berlin", "Amsterdam"],
  ];

  const startCity = "Kiev";
  const route = findRoute(tickets, startCity);

  return (
    <div>
      <h1>Kid's Travel Route</h1>
      <p>Starting City: {startCity}</p>
      <p>Route: {route.join(" → ")}</p>
    </div>
  );
};

export default App;
