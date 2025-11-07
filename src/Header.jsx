import chefClaudeLogo from "./image/chef-claude.png";

function Header() {
  return (
    <header>
      <img src={chefClaudeLogo} className="chef-claude-icon" />
      <h1>Chef Claude</h1>
    </header>
  );
}
export default Header;
