const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/CodingTrophyWife">
        <i className="fa-brands fa-github" aria-hidden="true" title="Cyndi Fosmarks' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/cyndi-fosmark-116714279/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Michael Yeates' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/cyndifos0806/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Michael Yeates' Instagram Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
