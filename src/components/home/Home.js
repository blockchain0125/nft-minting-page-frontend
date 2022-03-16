import { useState } from "react";
import Nft from "../../assets/images/nft.gif";
import "./home.scss";

const Home = () => {
	const [amount, setAmount] = useState(0);

	return (
		<div className="home">
			<div className="home-container">
				<div className="home-div home-title">SHIBABETS LIVE MINT</div>
				<div className="home-div home-subtitle">Wednesday, March 16, 2022</div>
				<div className="home-attributes">
					<div className="home-div home-attribute">Supply</div>
					<div className="home-div home-attribute">Price</div>
					<div className="home-div home-attribute">Max</div>
				</div>
				<div className="home-attributes">
					<div className="home-div home-attribute">7777</div>
					<div className="home-div home-attribute">0.2 Ξ</div>
					<div className="home-div home-attribute">5 per Wallet</div>
				</div>
				<div className="home-box">
					<div className="title">LIMITED SALE</div>
					<div className="nft-block">
						<img src={Nft} alt="nft" className="nft" />
						<div className="price-info">
							<div className="price-title">Price Per NFT in ETH</div>
							<div className="price">0.2 Ξ Each</div>
						</div>
					</div>
					<div className="amount-block">
						<div className="amount">
							<svg
								stroke="currentColor"
								viewBox="0 0 16 2"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="symbol"
								onClick={() => {
									if (amount >= 1) setAmount(amount - 1);
								}}
							>
								<path
									d="M15 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H15C15.2652 2 15.5196 1.89464 15.7071 1.70711C15.8946 1.51957 16 1.26522 16 1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0Z"
									fill="white"
								></path>
							</svg>
							{amount}
							<svg
								stroke="currentColor"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="symbol"
								onClick={() => {
									if (amount < 5) setAmount(amount + 1);
								}}
							>
								<path
									d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z"
									fill="white"
								></path>
							</svg>
						</div>
						<div
							className="setmax"
							onClick={() => {
								setAmount(5);
							}}
						>
							SET MAX
						</div>
					</div>
					<div className="total-block">
						<div className="total">TOTAL</div>
						<div className="total">{(amount * 0.2).toFixed(2)} Ξ</div>
					</div>
					<div className="flex-center">
						<div className="mintbtn">MINT</div>
					</div>
					<div className="flex-center">
						<div className="result">7775/7777</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
