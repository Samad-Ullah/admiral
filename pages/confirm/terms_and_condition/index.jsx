/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { ModalBody } from "reactstrap";
import styles from "../Confirm.module.scss";

function TermsAndCondition({ setCheck }) {
  const checkHandle = () => {
    let check = document.getElementById("check").checked;
    setCheck(check);
  };
  return (
    <ModalBody>
      <div className={styles.contentContainer}>
        <h6>A) Booking Rates and Services</h6>
        <p>
          AAdmirals enables its Users to book ground transportation over its
          online platform through it is website{" "}
          <a href="www.aadmirals.com">www.aadmirals.com</a> , over phone calls
          to AAdmirals office and through third parties plat forms as well.
        </p>
        <ol>
          <li>
            AAdmirals reservation system has three different rates categories,
            The Customer can choose between 1.1) Airport/Point to Point Transfer
            rides, each car type has different rate per mile, the price quoted
            is valid for a start and destination address. 1.2) Hourly Trips/
            Events and Celebrations, each car type has different rate per hour,
            the trip must always start and end in the municipals areas of the
            Houston greater area, An hourly booking always starts at the pickup
            time confirmed upon booking. 1.3) City To City Transfer each car
            type has different rate per hour based on trip duration starting
            from the time car picked up the customer ending at the time back to
            the garage, the price quoted is valid for a start address and
            destination address.
          </li>
          <li>
            Online bookings rates on{" "}
            <a href="www.aadmirals.com">www.aadmirals.com</a> are %5 less than
            rates of the phone calls bookings.
          </li>
          <li>
            Price received in the online or over the phone bookings is an
            estimate based on service details listed by the customer at the time
            of reservation. Additional time or services will result in
            additional charges, at standard rates, calculated at end of trip.
          </li>
          <li>
            Deposits and payments are NON REFUNDABLE without written approval by
            company management
          </li>
          <li>
            Tolls, Airport parking, and %10 gratuity are included in the
            submitted reservation price, if a customer well to add extra
            gratuity (Tip) to the chauffeur, We highly appreciate her/his own
            kind behavior, and it can be paid directly to the chauffeur or
            customer can inform us with text message to charge her/his credit
            card in file with the extra tip they want to add to the chauffeur.
          </li>
          <li>
            Illegal activities/items are forbidden in our vehicles and the
            client will be responsible paying for, included but not limited to:
            any imposed fines, towing and/or storage, loss of use fees, attorney
            fees, and other reasonable charges.
          </li>
          <li>
            If any illegal activities occurred / charged in OUR CARS, The
            chauffeur has the right to terminate run immediately without refund
            at his sole discretion
          </li>
          <li>
            The listed client assumes full financial liability for any damage to
            the vehicle, or its contents, caused by them or by any members of
            their party.
          </li>

          <li>
            No Alcoholic drinks for people under 21 years, It is parents and the
            persons them selfresponsibility , AAdmirals company and the
            Chauffeur are not responsible with any way if a customer charged by
            law for such this illegal act, and the chauffeur has the right to
            end the run immediately if he discover any such illegal behavior in
            the car without any refund to the customer.
          </li>

          <li>
            No DRUGS, NO SMOKING or EATING meals inside the cars. There is a
            minimum fee of $100 for each interior burn/damage/ extra cleaning.
          </li>

          <li>Missing/broken glasses minimum fee of $100 each</li>

          <li>
            Company is not liable for, including but not limited to; articles
            left in the limousine, mechanical breakdowns previous to or during
            your event, unforeseen major traffic conditions; perils of
            navigation, accidents, or other upsets and will only be responsible
            for making up lost time at a mutually agreed upon date and time
          </li>

          <li>
            The User can choose from different vehicle classes (e.g. “Standard
            Sedan" , or "Business Van/SUV”) for their Ride request, The vehicles
            images shown in the AAdmirals tools are only illustrative examples.
            These are not connected with any right to a particular vehicle make,
            model, Year and Color for the booked vehicle category - regional
            differences are especially possible. We cannot promise any
            particular color, year, make, or model of vehicle and for business
            reasons AAdmirals Travel& Transportation reserve the right to
            upgrade vehicles (at no additional charge) or use subcontractors at
            any time.
          </li>

          <li>Vehicles cannot be loaded beyond stated seating capacity.</li>

          <li>
            )Baby Seats, Luggage and Animals, One baby seat is complimentary in
            each Vehicle, more than one baby seat or toddler will lead to
            additional charges of $30 each, in all baby seat requirements
            include that in special notes field in the reservation form.
            Luggage, Vehicles cannot be loaded stated luggage capacity. The
            price given in the Booking Confirmation includes the number of
            pieces of luggage specified on the fleet page of
            www.aadmirals/fleet.com. Excess luggage, bulky luggage, or the
            transportation of animals not stated as an additional comment upon
            booking could lead to corresponding surcharges
          </li>
        </ol>
        <p>
          <b>B) Waite Time</b>, For all services we deliver, AAdmirals offers a
          complementary wait time to our customers. In case the pickup At
          Airports and Ports, Free of charges wait time of 60 minutes after
          flight arrival time for international flights, and for domestic
          flights 30 Minutes free of charges wait time after arrival time. In
          case the pickup At your home, residency, Office, hotel or any location
          not Airport or Port we offer 15 minutes after the prearranged time as
          wait time free of charges. Overtime pay will apply after the free time
          passed and the customer not shows- up or the customer showed up and
          requested the chauffeur to keep waiting for any reason, Overtime pay
          will calculate as a flat rate 15minutes , each additional minute of
          waiting time will be calculated as a flat-rate increments maximum 90
          minutes overtime after that AAdmirals have the right to release the
          chauffeur from the pickup address and passenger will considered as NO
          SHOW, the customer will charge the price of no show plus the overtime
          charges. the standard rate of Overtime pay is $12 for each 15 minutes
          for trips booked with Sedan or SUVs cars, $20 for each 15 minute for
          trips booked with VANs. the Overtime charges is SUBJECT TO CONTINUED
          VEHICLE AVAILABILITY at the pickup place
        </p>

        <h6>C) Cancellations, Changes to Booking, and No-Shows:-</h6>
        <ol>
          <li>
            For Airport/ Point To Point Transfer service: - Cancellations, For
            Airport/ Point To Point transfer services, cancellation is free of
            charge if there is more than Two hour left before the agreed pickup
            time. If there is two hours or less before the agreed pickup time,
            %66 of the total price must be paid. A cancellation can be done by
            email to limosales@aadmirals.com or by text message to AAdmirals
            office phone number located on our website www.aadmirals.com.
            Changes to Booking Acceptance of changes in current booking is based
            on AAdmirals ability and it is AAdmirals own decision as we focuses
            on providing high quality service to all our customers. for Airport
            transfer and point to point transfer are free of charges at any time
            before the car moved from our garage to perform your service, (as
            our routine you will receive a text message or email informing you
            with the position of your car), in all requests to changes of
            booking, AAdmirals reserve the right to accept or reject to perform
            the changes, In case of AAdmirals not able to perform any or all of
            the requested changes, the customer have the choice to perform the
            service as she/he booked or cancel the service, if the customer did
            not perform the service as booked Or not cancel the service she/he
            will be considered as No Show and will be charged %100 of the
            service price. No-Shows, without cancellation, In case of a no-show
            without cancellation the customer will be charged %100 of the trip
            cost.{" "}
          </li>
          <li>
            Hourly Bookings:- Cancellations, For hourly bookings, cancellations
            is free of charge if there are more than 12 hours left before the
            agreed pickup time. If there are 12 hours or less before the agreed
            pickup time, %50 of the total price must be paid, if a cancellation
            is received after the car has moved from our garage to perform your
            service %65 of the total price must be paid.. A cancellation can be
            done by email to limosales@aadmirals.com or by text message to
            AAdmirals office phone number located on our website
            www.aadmirals.com. Changes to Booking Acceptance of changes in
            current booking is based on AAdmirals ability and it is AAdmirals
            own decision as we focuses on providing high quality service to all
            our customers. for Hourly trips/ Events and Celebrations service are
            free of charges if there are more than 6 hours before the agreed
            pickup time, if there are 6 hours or less before the agreed pickup
            time a charge of %15 of the trip price will be add to the trip
            price, in all requests of changes in booking AAdmirals reserve the
            right to accept or reject the new changes. If AAdmirals not able to
            perform the changes, the customer have the choice to continue
            perform the service as he booked or cancel the service, if the
            customer do not perform the service as booked he/she and not cancel
            the service he/she will be considered as No Show and will be charged
            %100 of the service price. No-Shows, without cancellation, In case
            of a no-show without cancellation the customer will be charged %100
            of the trip cost, in case of
          </li>
          <li>
            City To City Transfer:- Cancellations For City To City Transfer
            bookings, cancellation is free of charge if there are more than 6
            hours before the agreed pickup time. If there are 6 hours or less
            before the agreed pickup time, %50 of the total price must be paid.
            if a cancellation is received after the car has moved from our
            garage to perform your service %65 of the total price must be paid.
            A cancellation can be done by email to limosales@aadmirals.com or by
            text message to AAdmirals office phone number located on our website
            www.aadmirals.com. Changes to Booking Acceptance of changes in
            current booking is based on AAdmirals ability and it is AAdmirals
            own decision as we focus on providing high quality service to all
            our customers. for City To City service are free of charges if there
            are more than 6 hours before the agreed pickup time, if there are 6
            hours or less before the agreed pickup time a charge of %15 of the
            trip price will be add to the trip price, in all requests of changes
            in booking AAdmirals reserve the right to accept or reject the new
            changes. If AAdmirals not able to perform the changes, the customer
            have the choice to continue perform the service as he booked or
            cancel the service, if the customer do not perform the service as
            booked he/she and not cancel the service he/she will be considered
            as No Show and will be charged %100 of the service price. No-Shows,
            without cancellation, In case of a no-show without cancellation the
            customer will be charged %100 of the trip cost, in case of
          </li>
        </ol>
        <h6>
          AAdmirals enables its Users to book ground transportation over its
          online platform through it is
        </h6>
        <h6>
          Checking the box of Terms&Conditions in our online reservation form,
          texting , email aadmirals or delivering verbal request over the phone
          to our team office with a request to book any of AAdmirals
          transportation services, all that means that the customer has been
          read, understand and agreed of the contents of this terms and
          conditions policies and rules
        </h6>
        <h6>
          Should any part of this Agreement be rendered or declared invalid by a
          court of competent jurisdiction, such invalidation of such part or
          portion of this Agreement should not invalidate the remaining portions
          thereof, and they shall remain in full force and effect.
        </h6>
      </div>
      <div className={styles.checkBoxContainer}>
        <input type="checkbox" name="check" id="check" onChange={checkHandle} />
        <p>
          By checking this box you acknowledged that you have read our policy,
          waiting policy and surcharge policy.
        </p>
      </div>
    </ModalBody>
  );
}

export default TermsAndCondition;
