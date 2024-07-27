import React, { useState } from 'react';
import { Pagination, Stack } from '@mui/material';

type PropsType = {
    data: any[],
    itemsPerPage:number,
}

export const PaginationComponent = ({ data, itemsPerPage }:PropsType) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (event:React.ChangeEvent<unknown>, value:number) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  return (
    <div>
      <div>
        {currentPageData.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
};

export default PaginationComponent;