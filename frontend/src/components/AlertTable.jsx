function AlertTable() {

  const alerts = [

    {
      id:1,
      type:"Fraud Transaction",
      level:"High"
    },

    {
      id:2,
      type:"Fake Review",
      level:"Medium"
    },

    {
      id:3,
      type:"Counterfeit Product",
      level:"Critical"
    }

  ];

  return (

    <table className="table table-hover">

      <thead>

      <tr>

      <th>ID</th>

      <th>Alert</th>

      <th>Priority</th>

      </tr>

      </thead>

      <tbody>

      {
        alerts.map(alert=>(

          <tr key={alert.id}>

            <td>{alert.id}</td>

            <td>{alert.type}</td>

            <td>{alert.level}</td>

          </tr>

        ))
      }

      </tbody>

    </table>

  );

}

export default AlertTable;