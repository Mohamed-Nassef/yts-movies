import {
    Title,
    Subtitle,
    ImportantText,
    StyledSection,
    LinksContainer,
    IconLink,
    DownloadsRow,
} from './TopSectionStyled';

import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const TopSection = () => {
    return (
        <StyledSection >
            <Title>Download YTS YIFY movies: HD smallest size</Title>

            <Subtitle>
                Welcome to the official <strong>YTS.MX</strong> website. Here you can browse and download YIFY
                movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS
                Movies Torrents.
            </Subtitle>

            <ImportantText>
                IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
            </ImportantText>

            <LinksContainer>
                <IconLink href="#">
                    <TelegramIcon fontSize="small" />
                    @YTSMX_UPDATES
                </IconLink>
                <IconLink href="#">
                    <TwitterIcon fontSize="small" />
                    Follow @YTSYIFY
                </IconLink>
                <IconLink href="#">
                    <LanguageIcon fontSize="small" />
                    @ytsyify
                </IconLink>
            </LinksContainer>

            <DownloadsRow>
                <span></span>
                <strong ><span style={{ color: '#89c403' }}>★</span> Popular Downloads</strong>
                <IconLink href="#">
                    <RssFeedIcon fontSize="small" />
                    more featured...
                </IconLink>
            </DownloadsRow>
        </StyledSection>
    );
};

export default TopSection;
