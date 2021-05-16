import Select from '@paljs/ui/Select';
import { InputGroup } from '@paljs/ui/Input';
import { Card, CardBody } from '@paljs/ui/Card';
import { ButtonLink } from '@paljs/ui/Button';
import { Button } from '@paljs/ui/Button';
import { navigate } from 'gatsby';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';
import axios from 'axios';
import { Container } from '@material-ui/core';


const Input = styled(InputGroup)`
  margin-bottom: 10px;
`;
const SelectStyled = styled(Select)`
  margin-bottom: 1rem;
`;

const ErrorStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  small {
    margin-bottom: 3rem;
  }
  h1 {
    margin-bottom: 0.5rem;
  }
  a {
    max-width: 20rem;
  }
`;

const searchBy = [
  { value: '1', label: 'Administrators' },
];

const onSearchProduct = () => {

}
const onChangeStatus = (e) => {
  // v will be true or false
  console.log('Change Status: '+e.target);
  // alert('Change Status'+ e);
}
export default function Index() {
  return (
    <>
      <SEO title="USERS" />
      <div className="content-wrapper px-4 py-4">

      <Card>
          <CardBody>

            <Container>
                <Row>
                  <Col breakPoint={{ xs: 12 }}>
                    <h1 className="text-center mb-5">USERS</h1>
                  </Col>
                </Row>

                <Row className="justify-content-center align-items-center mb-5">
                  <Col className="col-lg-12">
                  <form>
                      <Row>
                        <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 6 }}>
                        <label htmlFor="SearchVal">Search Users</label>
                          <Input fullWidth size="Medium" className="notes">
                            <input type="text" placeholder="" id="SearchVal" name="SearchVal" onChange ={onChangeStatus.bind(this)}/>
                          </Input>
                        </Col>
                        <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 6 }}>
                          <label htmlFor="DepartmentID">Department</label>
                          <SelectStyled options={searchBy}  placeholder="Select" id="DepartmentID" name="DepartmentID" onChange ={onChangeStatus.bind(this)} />
                        </Col>
                        <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 6 }}>
                            <Button status="Success" type="button" shape="SemiRound" onClick={onSearchProduct} fullWidth>View Users</Button>
                        </Col>
                    </Row>
                          
                  </form> 
                  </Col>
                </Row>

                <Row className="justify-content-center align-items-center mb-4">
                  <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 12 }}>
                    <h2 className="mb-0">Results</h2>
                  </Col>
                </Row>
              
                <Row className="mb-5">
                  <Col id="main_view">User Results</Col>
                </Row>

              </Container>

          </CardBody>
        </Card>
        </div>
    </>
  );
}