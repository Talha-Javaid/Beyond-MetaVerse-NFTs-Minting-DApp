import avatar from '../assets/owner.webp'
import github from '../assets/github_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedIn from '../assets/linkedIn_icon.png'
import { setAlert, setGlobalState, useGlobalState } from '../store'
import { payToMint } from '../Beyondmetaverse'

const Hero = () => {
  const [nfts] = useGlobalState('nfts')

  const onMintNFT = async () => {
    setGlobalState('loading', {
      show: true,
      msg: 'Minting new NFT to your account',
    })

    await payToMint()
      .then(() => setAlert('Minting Successful...', 'green'))
      .catch(() => setGlobalState('loading', { show: false, msg: '' }))
  }

  return (
    <div
      className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')]
        bg-no-repeat bg-cover"
    >
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold text-center">
             <br />
            <span className="text-gradient">Beyond MetaVerse </span>NFTs Collection
          </h1>

          <p className="text-white font-semibold text-sm mt-3">
            Mint and collect the hottest NFTs around.
          </p>

          <button
            className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f] p-2
            rounded-full cursor-pointer my-4"
            onClick={onMintNFT}
          >
            Mint Now
          </button>

          <a
            href="https://github.com/Talha-Javaid"
            className="flex flex-row justify-center space-x-2 items-center
            bg-[#000000ad] rounded-full my-4 pr-3 cursor-pointer"
          >
            <img
              className="w-11 h-11 object-contain rounded-full"
              src={avatar}
              alt="Beyond MetaVerse Logo"
            />
            <div className="flex flex-col font-semibold">
              <span className="text-white text-sm">0x298C...1D22</span>
              <span className="text-[#e32970] text-xs">Beyond MetaVerse</span>
            </div>
          </a>

          <p className="text-white text-sm font-medium text-center">
          Crypto Deadly Beasts is a unique collection of 99 NFTs
           <br /> Mint Your's Now
          </p>

          <ul className="flex flex-row justify-center space-x-2 items-center my-4">
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://github.com/Talha-Javaid"
            >
              <img className="w-7 h-7" src={github} alt="Github" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://www.linkedin.com/in/talhajavaidmalik/"
            >
              <img className="w-7 h-7" src={linkedIn} alt="linkedIn" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://www.facebook.com/iamtalhajavaidmalik"
            >
              <img className="w-7 h-7" src={facebook} alt="facebook" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://twitter.com/imtalhajavaid"
            >
              <img className="w-7 h-7" src={twitter} alt="twitter" />
            </a>
  
          </ul>

          <div
            className="shadow-xl shadow-black flex flex-row
            justify-center items-center w-10 h-10 rounded-full
          bg-white cursor-pointer p-3 ml-4 text-black 
            hover:bg-[#bd255f] hover:text-white transition-all
            duration-75 delay-100"
          >
            <span className="text-xs font-bold">{nfts.length}/99</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
