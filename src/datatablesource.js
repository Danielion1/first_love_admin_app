export const userColumns = [
        { field: 'id', headerName: 'ID', width: 70},
        {field: 'username', headerName: 'Username', width: 170,
    renderCell: (params)=>{
        return(
            <div className="cellwithImg">
                <img className="cellImg" src={params.row.img} alt="avatarimg"/>
                {params.row.username}

            </div>
        )
    }},
    { field: 'firstName', headerName: 'FirstName', width: 120},
    { field: 'lastName', headerName: 'LastName', width: 120},
    { field: 'branch', headerName: 'Branch', width: 120},
    { field: 'gatheringAttd', headerName: 'Gathering Attd', width: 120, type:'number'},
    
]

export const userRows = [
    {
      id: 1,
      username:"Danka",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      firstName: "John",
      lastName: "Smith",
      branch: "Grand Rapids",
      gatheringAttd: 1000,
    },
    {
      id: 2,
      username:"RosaK",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      firstName: "John",
      lastName: "Smith",
      branch: "Grand Rapids",
      gatheringAttd: 550,
    
    
    },
    {
      id: 3,
      username:"Mongo",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      firstName: "John",
      lastName: "Smith",
      branch: "Grand Rapids",
      gatheringAttd: 200,
    },
    {
      id: 4,
      username:"Oscal",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      firstName: "John",
      lastName: "Smith",
      branch: "Grand Rapids",
      gatheringAttd: 150,
    },
    {
      id: 5,
      username:"Fins",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      firstName: "John",
      lastName: "Smith",
      branch: "Grand Rapids",
      gatheringAttd: 2000,
    },
  ];