To fix this issue, use either pagination or a virtualization library. 
Pagination approach: 
```javascript
import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';

const App = () => {
  const [data, setData] = useState(largeDataset.slice(0, 20)); // Initial data
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
  
  const loadMoreData = () => {
    const nextPage = currentPage + 1;
    const nextData = largeDataset.slice((nextPage - 1) * pageSize, nextPage * pageSize);
    setData([...data, ...nextData]);
    setCurrentPage(nextPage);
  };
  
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.text}</Text>}
      keyExtractor={(item) => item.id}
      onEndReached={data.length < largeDataset.length ? loadMoreData : null}
      onEndReachedThreshold={0.5}
    />
  );
};

export default App;
```
Virtualization library approach: 
Consider using a library like react-native-virtualized-list to handle large datasets efficiently.