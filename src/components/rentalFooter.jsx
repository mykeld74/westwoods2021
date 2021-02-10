import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const RentalFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 80px;
  background: #c5c5c5;
  margin: auto;
  padding: 0;
  a {
    p {
      margin: 0;
      font-weight: 700;
    }
  }
  @media (max-width: 478px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const RentalLink = styled.div`
  padding: 20px;
  text-align: center;

  p {
    color: #ff2700;
    font-weight: 700;
    transition: all 0.3s ease-in-out;
  }
  .rentalIcon {
    fill: #ff2700;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    p {
      color: #df2200;
    }
    .rentalIcon {
      fill: #df2200;
    }
  }
  .rentalSvg {
    height: 6vh;
  }
`

const RentalFooter = () => (
  <RentalFooterContainer>
    <Link to="/facility-rentals/weddings">
      <RentalLink>
        <svg
          data-name="Layer 1"
          viewBox="0 0 82.05 57.14"
          className="rentalSvg"
        >
          <title>Wedding</title>
          <path
            className="rentalIcon"
            d="M40.06,50.87a21.36,21.36,0,1,1,3.66-3.75l2.21,2.47a24.76,24.76,0,1,0-3.69,3.71Z"
            transform="translate(-1.95 -1.71)"
          />
          <path
            className="rentalIcon"
            d="M45.88,17.33a21.36,21.36,0,1,1-3.65,3.75L40,18.61a24.71,24.71,0,1,0,3.69-3.72Z"
            transform="translate(-1.95 -1.71)"
          />
          <polygon
            className="rentalIcon"
            points="44.22 1.04 41.81 4.28 44.11 7.6 40.87 5.19 37.55 7.48 39.96 4.25 37.66 0.93 40.9 3.33 44.22 1.04"
          />
          <polygon
            className="rentalIcon"
            points="41.03 1.89 40.9 2.52 40.77 1.89 40.77 0.63 40.9 0 41.03 0.63 41.03 1.89"
          />
          <polygon
            className="rentalIcon"
            points="41.03 7.66 40.9 8.29 40.77 7.66 40.77 6.4 40.9 5.77 41.03 6.4 41.03 7.66"
          />
          <polygon
            className="rentalIcon"
            points="43.27 4.35 42.65 4.22 43.27 4.09 44.53 4.09 45.16 4.22 44.53 4.35 43.27 4.35"
          />
          <polygon
            className="rentalIcon"
            points="37.28 4.35 36.65 4.22 37.28 4.09 38.54 4.09 39.17 4.22 38.54 4.35 37.28 4.35"
          />
          <polygon
            className="rentalIcon"
            points="62.6 17.09 60.19 20.33 62.49 23.65 59.25 21.24 55.93 23.53 58.34 20.3 56.05 16.97 59.28 19.38 62.6 17.09"
          />
          <polygon
            className="rentalIcon"
            points="59.41 17.94 59.28 18.57 59.15 17.94 59.15 16.68 59.28 16.05 59.41 16.68 59.41 17.94"
          />
          <polygon
            className="rentalIcon"
            points="59.41 23.71 59.28 24.34 59.15 23.71 59.15 22.45 59.28 21.82 59.41 22.45 59.41 23.71"
          />
          <polygon
            className="rentalIcon"
            points="61.66 20.4 61.02 20.27 61.66 20.14 62.91 20.14 63.55 20.27 62.91 20.4 61.66 20.4"
          />
          <polygon
            className="rentalIcon"
            points="55.66 20.4 55.03 20.27 55.66 20.14 56.92 20.14 57.55 20.27 56.92 20.4 55.66 20.4"
          />
          <polygon
            className="rentalIcon"
            points="25.76 17.48 23.35 20.72 25.64 24.04 22.41 21.63 19.09 23.92 21.5 20.69 19.2 17.37 22.44 19.78 25.76 17.48"
          />
          <polygon
            className="rentalIcon"
            points="22.57 18.33 22.44 18.96 22.3 18.33 22.3 17.07 22.44 16.44 22.57 17.07 22.57 18.33"
          />
          <polygon
            className="rentalIcon"
            points="22.57 24.1 22.44 24.73 22.3 24.1 22.3 22.84 22.44 22.21 22.57 22.84 22.57 24.1"
          />
          <polygon
            className="rentalIcon"
            points="24.81 20.79 24.18 20.66 24.81 20.53 26.07 20.53 26.7 20.66 26.07 20.79 24.81 20.79"
          />
          <polygon
            className="rentalIcon"
            points="18.82 20.79 18.19 20.66 18.82 20.53 20.08 20.53 20.71 20.66 20.08 20.79 18.82 20.79"
          />
        </svg>

        <p>Wedding Rentals</p>
      </RentalLink>
    </Link>

    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdqoTb3uYT6YHL3LuHNH8oj4LjvOvaRGVh4Qokq751eKzQrfw/viewform"
      target="_blank"
      rel="noopener noreferrer"
    >
      <RentalLink>
        <svg viewBox="0 0 97.14 59.71" className="rentalSvg">
          <title>rent</title>
          <g>
            <path
              className="rentalIcon"
              d="M72.52,21.86a6.86,6.86,0,0,0-1.37-.76l-2.51,3.73,1.33.9c1.39.94,2.8.77,3.58-.4S73.89,22.8,72.52,21.86Z"
              transform="translate(-12.35 -0.82)"
            />
            <path
              className="rentalIcon"
              d="M108.72,38.36A4.58,4.58,0,0,0,107.5,32L77.73,12.13,76,11l-7.19-4.8A5.38,5.38,0,0,0,63.25,6L52.16,12.09a5.49,5.49,0,0,0-2.79,4.18L47.94,28.85a5.37,5.37,0,0,0,2.34,5.08l7.2,4.81,1.7,1.14,29.76,19.9a4.57,4.57,0,0,0,6.32-1.29ZM55.13,21.63a3.77,3.77,0,1,1,5.2-1.06A3.75,3.75,0,0,1,55.13,21.63ZM68.9,32.89a16.57,16.57,0,0,1,1-2.89c.65-1.61.47-2.5-.68-3.35L68,25.82l-3,4.42-1.3-.88,6.8-10.06a16.23,16.23,0,0,1,2.65,1.48,4.94,4.94,0,0,1,2.35,2.81A3,3,0,0,1,75,26.06a3.23,3.23,0,0,1-3.66,1.32l0,0a3.07,3.07,0,0,1,.09,3.06,19.22,19.22,0,0,0-1.11,3.33Zm8.51,5.76-5.68-3.84,6.89-10.19,5.46,3.68-.75,1.11L79.18,26.6,77,29.82l3.93,2.66-.74,1.09-3.92-2.66-2.49,3.68,4.37,2.95Zm9.27,6.27L85.36,44l.29-7.34A40.09,40.09,0,0,1,86.07,32L86,32c-.79,1.34-1.59,2.58-2.74,4.28l-2.94,4.35-1.23-.83L86,29.6l1.43,1-.26,7.35a34.65,34.65,0,0,1-.42,4.54h0c.8-1.44,1.61-2.7,2.68-4.29l2.89-4.27,1.22.84Zm14.74-3.26-3.09-2.09-6.14,9.08-1.31-.89L97,38.68l-3.07-2.07.76-1.12,7.47,5Z"
              transform="translate(-12.35 -0.82)"
            />
          </g>
          <path
            className="rentalIcon"
            d="M45.49,26.7a9.84,9.84,0,1,0-15.85.67L13,52.26l-.42.61a1,1,0,0,0-.06,1.05l1,1.93a1,1,0,0,0,.78.54l2.16.26a1,1,0,0,0,1-.44l.34-.48,2.68-1.09,0-2.86.82-1.22,1.88-.76v-2l1.23-1.84,2.81-1.59.41-3.2.7-1,3.05-2.23.9-3.66,2.38-3.54A9.85,9.85,0,0,0,45.49,26.7Zm-7.56-6a3.44,3.44,0,1,1,4.78-.94A3.44,3.44,0,0,1,37.93,20.67Z"
            transform="translate(-12.35 -0.82)"
          />
          <path
            className="rentalIcon"
            d="M48.44.82A10.48,10.48,0,1,0,58.92,11.3,10.48,10.48,0,0,0,48.44.82Zm-.13,18.57a8.21,8.21,0,1,1,8.21-8.2A8.2,8.2,0,0,1,48.31,19.39Z"
            transform="translate(-12.35 -0.82)"
          />
        </svg>
        <p>General Rentals</p>
      </RentalLink>
    </a>

    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeDO3CFJoML0ZNME5Ol8lNIiXXNygWihT610j3S7qOFDaUVzw/viewform"
      target="_blank"
      rel="noopener noreferrer"
    >
      <RentalLink>
        <svg viewBox="0 0 97.14 59.71" className="rentalSvg">
          <title>rent</title>
          <g>
            <path
              className="rentalIcon"
              d="M72.52,21.86a6.86,6.86,0,0,0-1.37-.76l-2.51,3.73,1.33.9c1.39.94,2.8.77,3.58-.4S73.89,22.8,72.52,21.86Z"
              transform="translate(-12.35 -0.82)"
            />
            <path
              className="rentalIcon"
              d="M108.72,38.36A4.58,4.58,0,0,0,107.5,32L77.73,12.13,76,11l-7.19-4.8A5.38,5.38,0,0,0,63.25,6L52.16,12.09a5.49,5.49,0,0,0-2.79,4.18L47.94,28.85a5.37,5.37,0,0,0,2.34,5.08l7.2,4.81,1.7,1.14,29.76,19.9a4.57,4.57,0,0,0,6.32-1.29ZM55.13,21.63a3.77,3.77,0,1,1,5.2-1.06A3.75,3.75,0,0,1,55.13,21.63ZM68.9,32.89a16.57,16.57,0,0,1,1-2.89c.65-1.61.47-2.5-.68-3.35L68,25.82l-3,4.42-1.3-.88,6.8-10.06a16.23,16.23,0,0,1,2.65,1.48,4.94,4.94,0,0,1,2.35,2.81A3,3,0,0,1,75,26.06a3.23,3.23,0,0,1-3.66,1.32l0,0a3.07,3.07,0,0,1,.09,3.06,19.22,19.22,0,0,0-1.11,3.33Zm8.51,5.76-5.68-3.84,6.89-10.19,5.46,3.68-.75,1.11L79.18,26.6,77,29.82l3.93,2.66-.74,1.09-3.92-2.66-2.49,3.68,4.37,2.95Zm9.27,6.27L85.36,44l.29-7.34A40.09,40.09,0,0,1,86.07,32L86,32c-.79,1.34-1.59,2.58-2.74,4.28l-2.94,4.35-1.23-.83L86,29.6l1.43,1-.26,7.35a34.65,34.65,0,0,1-.42,4.54h0c.8-1.44,1.61-2.7,2.68-4.29l2.89-4.27,1.22.84Zm14.74-3.26-3.09-2.09-6.14,9.08-1.31-.89L97,38.68l-3.07-2.07.76-1.12,7.47,5Z"
              transform="translate(-12.35 -0.82)"
            />
          </g>
          <path
            className="rentalIcon"
            d="M45.49,26.7a9.84,9.84,0,1,0-15.85.67L13,52.26l-.42.61a1,1,0,0,0-.06,1.05l1,1.93a1,1,0,0,0,.78.54l2.16.26a1,1,0,0,0,1-.44l.34-.48,2.68-1.09,0-2.86.82-1.22,1.88-.76v-2l1.23-1.84,2.81-1.59.41-3.2.7-1,3.05-2.23.9-3.66,2.38-3.54A9.85,9.85,0,0,0,45.49,26.7Zm-7.56-6a3.44,3.44,0,1,1,4.78-.94A3.44,3.44,0,0,1,37.93,20.67Z"
            transform="translate(-12.35 -0.82)"
          />
          <path
            className="rentalIcon"
            d="M48.44.82A10.48,10.48,0,1,0,58.92,11.3,10.48,10.48,0,0,0,48.44.82Zm-.13,18.57a8.21,8.21,0,1,1,8.21-8.2A8.2,8.2,0,0,1,48.31,19.39Z"
            transform="translate(-12.35 -0.82)"
          />
        </svg>
        <p>Non-profit Rentals</p>
      </RentalLink>
    </a>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdNs_5YY-hUGSdN153wGfGOYAr_J8fTpX7L-pRRCE3TzykPyQ/viewform?usp=sf_link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <RentalLink>
        <svg viewBox="0 0 300 300" className="rentalSvg">
          <g>
            <path
              className="rentalIcon"
              d="M233.3,72.1H171V28c0-6.6-5.4-12-12-12h-41c-6.6,0-12,5.4-12,12v44.1H41.3c-5.9,0-10.7,4.8-10.7,10.7v43.5
		c0,5.9,4.8,10.7,10.7,10.7H106V270c0,6.6,5.4,12,12,12h41c6.6,0,12-5.4,12-12V137.1h62.3c5.9,0,10.7-4.8,10.7-10.7V82.8
		C244,76.9,239.2,72.1,233.3,72.1z"
            />
          </g>
        </svg>
        <p>Funeral Rentals</p>
      </RentalLink>
    </a>
  </RentalFooterContainer>
)

export default RentalFooter
