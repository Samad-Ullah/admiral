import React, {useState} from "react";
import styles from "../Confirm.module.scss";
import Paypal from "../../../Payment/Paypal";
import Braintree from "../../../Payment/Braintree";
import {ListGroup, ListGroupItem} from "reactstrap";

import {Collapse, Button, CardBody, Card} from "reactstrap";
import {getToken} from "../../../redux/Payment/actions";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {Alert} from "reactstrap";
import GooglePay from "../../../Payment/GooglePay";
import Image from "next/image";
import google from "../../../Assets/GPay_Acceptance_Mark_800.png";

function PaymentMethod() {
  const dispatch = useDispatch();
  const {execute_error} = useSelector((state) => state.paymentReducer);

  const history = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggle2 = () => {
    dispatch(getToken(history));
    setIsOpen2(!isOpen2);
  };
  const toggle = () => setIsOpen(!isOpen);
  const toggle3 = () => setIsOpen3(!isOpen3);

  return (
    <>
      <div className={styles.payment_method_main}>
        {execute_error && (
          <Alert className="m-2" color="danger">
            {execute_error}
          </Alert>
        )}
        <h3>How would you like to pay?</h3>
        <div className={styles.list_container}>
          <ListGroup>
            <ListGroupItem
              className={styles.list_option}
              onClick={(e) => toggle2()}>
              <span>
                <img
                  width="32px"
                  src="../../../Assets/credit-card.svg"
                  className="img img fluid mr-2"
                  alt="credit-card img"
                />
              </span>
              Pay With Card
            </ListGroupItem>
            <ListGroupItem
              className={styles.list_option}
              onClick={(e) => toggle()}>
              <span>
                <img
                  src="../../../Assets/paypal.svg"
                  width="32px"
                  className="img img fluid mr-2"
                  alt="paypal img"
                />
              </span>
              PayPal
            </ListGroupItem>
            <ListGroupItem
              className={styles.list_option}
              onClick={(e) => toggle3()}>
              <span style={{paddingRight:"10px"}}>
                <Image
                src={google}
                alt="Aadmirals service image"
                width="55px"
                height="32px"
                quality={100}
                placeholder="empty"
              />
              </span>
              Google Pay
            </ListGroupItem>
          </ListGroup>
          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody className={styles.textAlign}>
                <Paypal />
              </CardBody>
            </Card>
          </Collapse>
          <Collapse isOpen={isOpen2}>
            <Card>
              <CardBody className={`${styles.textAlign} p-0`}>
                <Braintree trigger={isOpen2} />
              </CardBody>
            </Card>
          </Collapse>
          <Collapse isOpen={isOpen3}>
            <Card>
              <CardBody className={`${styles.textAlign} p-0`}>
                <GooglePay trigger={isOpen3} />
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default PaymentMethod;
