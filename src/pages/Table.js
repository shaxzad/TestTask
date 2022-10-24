import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "../components/Table/Table";

export const TableList = () => {
  const [comments, setComment] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const clData = [
    {
      title: "id",
    },
    {
      title: "name  ",
    },
    {
      title: "body  ",
    },
    {
      title: "email",
    },
  ];

  const fetchComments = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        const comments = res?.data.map((item) => {
          return {
            id: item.id,
            name: item.name,
            body: item.body,
            email: item.email,
          };
        });
        const newlist = comments.splice(0, 20);
        setComment(newlist);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const HandleSearch = (event) => {
    const searchItem = event?.target.value;
    setSearchValue(searchItem);
    let filter = comments.filter((word) => word?.name.includes(searchItem));
    setComment(filter);
    if (!searchItem) {
      fetchComments();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        className="form-control mb-2"
        value={searchValue}
        onChange={HandleSearch}
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      ></input>
      <Table className="mt-1" column={clData} data={comments} />
    </div>
  );
};