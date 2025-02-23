# React Native FlatList Performance Issue

This repository demonstrates a common performance issue encountered when using `FlatList` in React Native with large datasets. The app crashes or becomes unresponsive due to memory issues when rendering a large number of items.  The solution involves using techniques like windowing and virtualization to improve performance.

## Bug Description
The `bug.js` file contains a `FlatList` that renders a large dataset, causing performance problems. The `bugSolution.js` file shows how to solve this issue using pagination or a virtualization library.