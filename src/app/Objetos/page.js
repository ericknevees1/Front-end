'use client'

import Pagina from "../components/Pagina";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Objetos() {

    const carros = [
        
        {marca: 'GM', modelo: 'Corsa', cor: 'Branco', ano: '1994',foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2022/01/DSCF9350-e1643940233796.jpg?quality=70&strip=info'}, 
        {marca: 'GM', modelo: 'Celta', cor: 'Preto',ano: '2006', foto: 'https://i0.wp.com/www.autocustom.com.br/wp-content/uploads/2017/09/celta-preto-aro-17-roda-preta-rebaixado-thassio-dsc0849.jpg?w=783&h=519&ssl=1'}, 
        {marca: 'Ferrari', modelo: 'La Ferrari', cor: 'Vermelha',ano: '2015', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Geneva_MotorShow_2013_-_Ferrari_LaFerrari_front_left_view.jpg/800px-Geneva_MotorShow_2013_-_Ferrari_LaFerrari_front_left_view.jpg'}, 
        {marca: 'VW', modelo: 'Fusca', cor: 'Prata',ano: '1993', foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfPMuAMLaUn1r83UcJfa0wjuH4nLtUXQG8eBXXKO7ItUaLBe-jBGnJbjpHw6RsAtjcouQoI3TMWdx3fRHEMDzBLSfQOOmFR1VADkdcRXBbY3P7LWfxCi9DqUVhATThG1rLc9P9osMYEhhLi9nXYVtbVKy9lXKx5LUDXN_uEXQrv82dHAIo_CfsdV9_hSah/s2560/VW-Fusca-Itamar-1993%20%285%29.jpg'}, 
        {marca: 'GM', modelo: 'Cobalt', cor: 'Cinza',ano: '2013', foto: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Chevrolet_Cobalt_2013_in_Russia.JPG' }, 
    ]

    return (
        <Pagina titulo="Lista de Carros">
            <Row className="mt-4" xs={1} sm={2} md={3} lg={4} xl={5}>
                {carros.map((item, index) => (
                    <Col key={index} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={item.foto} alt={`${item.marca} ${item.modelo}`} />
                            <Card.Body>
                                <Card.Title>{item.marca} {item.modelo}</Card.Title>
                                <Card.Text>
                                    Cor: {item.cor}
                                </Card.Text>
                                <Card.Text>
                                    Ano: {item.ano}
                                </Card.Text>
                                <Button variant="primary">Ver Detalhes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    );
    
}
