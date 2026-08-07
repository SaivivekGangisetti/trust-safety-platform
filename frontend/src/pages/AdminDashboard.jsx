import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AdminDashboard() {
  return (
    <>
      <Navbar />

      <div className="d-flex">

        <Sidebar />

        <div className="container-fluid p-4">

          <h2 className="mb-4">Admin Dashboard</h2>

          <div className="row">

            <div className="col-md-3">
              <div className="card shadow text-center p-3">
                <h4>Total Users</h4>
                <h2>1200</h2>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow text-center p-3">
                <h4>Fraud Alerts</h4>
                <h2 className="text-danger">25</h2>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow text-center p-3">
                <h4>Fake Reviews</h4>
                <h2 className="text-warning">16</h2>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow text-center p-3">
                <h4>Counterfeit</h4>
                <h2 className="text-primary">12</h2>
              </div>
            </div>

          </div>

          <div className="card mt-5 shadow">

            <div className="card-header bg-dark text-white">
              Recent Alerts
            </div>

            <table className="table table-striped">

              <thead>

                <tr>

                  <th>ID</th>
                  <th>Type</th>
                  <th>Status</th>

                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>101</td>
                  <td>Fraud Transaction</td>
                  <td className="text-danger">High Risk</td>
                </tr>

                <tr>
                  <td>102</td>
                  <td>Fake Review</td>
                  <td className="text-warning">Pending</td>
                </tr>

                <tr>
                  <td>103</td>
                  <td>Counterfeit Product</td>
                  <td className="text-primary">Blocked</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </>
  );
}

export default AdminDashboard;