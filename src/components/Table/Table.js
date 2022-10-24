export const Table = ({ column, data, className }) => {
    return (
      <table className={`${className} table table-striped`}>
        <thead>
          <tr>
            {column?.map((item, index) => {
              return (
                <th key={index} scope="col">
                  {item.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={index}>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.body}</th>
                <th>{item.email}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };