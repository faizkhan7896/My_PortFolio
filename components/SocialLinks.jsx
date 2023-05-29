import React from "react";

import { Button } from "reactstrap";

import { socialLinks, socialLinks_ } from "../portfolio";

const SocialLinks = ({ data }) => {
	return (
		<div className="btn-wrapper text-lg">


			{/* {socialLinks_.map((data, i) => {
				return (
					<img
						src={data.image}
						style={{
							objectFit: 'contain',
							left: 0,
							right: 0,
							top: '7rem',
							marginLeft: 'auto',
							marginRight: 'auto',
							width: '100%',
							height: '18rem',
							borderRadius: '5%',
							marginTop: '2rem',
						}}
						className='shadow mb-3'
						alt={data.image}
					/>
				)
			})} */}
			{/* {socialLinks.facebook && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="facebook"
					href={socialLinks.facebook}
					target="_blank"
					rel="noopener"
					aria-label="Facebook"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-facebook-square" />
					</span>
				</Button>
			)} */}
			{socialLinks.instagram && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="instagram"
					href={socialLinks.instagram}
					target="_blank"
					rel="noopener"
					aria-label="Instagram"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-instagram" />
					</span>
				</Button>
			)}
			{socialLinks.github && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="github"
					href={socialLinks.github}
					rel="noopener"
					aria-label="Github"
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-github" />
					</span>
				</Button>
			)}
			{socialLinks.linkedin && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="twitter"
					rel="noopener"
					aria-label="Linkedin"
					href={socialLinks.linkedin}
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-linkedin" />
					</span>
				</Button>
			)}
			{socialLinks.twitter && (
				<Button
					className="btn-icon-only rounded-circle"
					color="twitter"
					href={socialLinks.twitter}
					target="_blank"
					rel="noopener"
					aria-label="Twitter"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-twitter" />
					</span>
				</Button>
			)}
		</div>
	);
};

export default SocialLinks;
