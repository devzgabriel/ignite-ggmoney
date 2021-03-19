import { Container } from './styles'

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Site</td>
            <td className='deposit'>$12.000</td>
            <td>Desenvolvimento</td>
            <td>13/02/2021</td>
          </tr>
          <tr>
            <td>Comida</td>
            <td className='withdraw'>- $1.000</td>
            <td>Alimentação</td>
            <td>13/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
