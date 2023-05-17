import { Table } from 'reactstrap'
import { useSelector } from 'react-redux'

const ComponentB = () => {

    const { user } = useSelector((state) => state.user)
    console.log(user)
    return (<>
        <div className="col border border-2 border-dark rounded">
            <div className="p-3">
                <h1 className='mb-3 text-center'>Component B</h1>
                <h3 className="text-center">User Table</h3>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, index) => (
                                <tr key={index}>
                                    <td>{++index}</td>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    </>);
}

export default ComponentB;