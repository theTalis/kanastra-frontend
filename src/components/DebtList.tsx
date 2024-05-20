import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { IDebt } from '@/types';

const Container = styled.div`
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const TableHeader = styled.th`
  background-color: #f4f4f4;
  padding: 10px;
  border: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const DebitList = () => {
  const [debits, setDebits] = useState([] as IDebt[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDebits = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/debts?page=1');

        console.log(response.data)
        setDebits(response.data);
      } catch (err) {
        // setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDebits();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <Container>
      <h2>Listagem de Débitos</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Government ID</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Debt Amount</TableHeader>
            <TableHeader>Debt Due Date</TableHeader>
            <TableHeader>Debt ID</TableHeader>
          </tr>
        </thead>
        <tbody>
          {debits.map((debit: IDebt) => (
            <tr key={debit.debt_id}>
              <TableData>{debit.name}</TableData>
              <TableData>{debit.government_id}</TableData>
              <TableData>{debit.email}</TableData>
              <TableData>{debit.debt_amount}</TableData>
              <TableData>{debit.debt_due_date}</TableData>
              <TableData>{debit.debt_id}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DebitList;
