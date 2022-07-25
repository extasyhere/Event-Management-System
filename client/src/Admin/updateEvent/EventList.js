import React from 'react'

export default function EventList() {
    return (
        <div className="productList">
          <DataGrid
            rows={movies}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            getRowId={(r)=>r._id}
          />
        </div>
      );
}
