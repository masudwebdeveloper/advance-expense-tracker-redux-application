import Balanced from "./components/Balanced";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Transactions from "./components/transactions/Transactions";

function App() {
    return (
        <Layout>
            <Balanced />
            <Form />
            <Transactions />
        </Layout>
    );
}

export default App;
