import {
	AppBar,
	ThemeProvider,
	createTheme,
	Typography,
	Box,
	Toolbar,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Container
} from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import * as React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAtomValue } from "jotai";
import { configErrorAtom } from "../atoms/configErrorAtom";
import { ConfigErrorModal } from "./ConfigErrorModal";

const darkTheme = createTheme({
	palette: {
		mode: 'dark'
	},
});

export const Layout = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = React.useState(false);
	const isError = useAtomValue(configErrorAtom)

	const close = () => {
		setIsOpen(false);
	}
	
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={() => setIsOpen(true)}
						>
							<MenuIcon />
						</IconButton>
						<svg style={{ display: "flex", height: "32px", marginRight: "16px", width: "3em", marginLeft: "-16px" }} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="400" height="212.95971978984238" viewBox="0, 0, 400,212.95971978984238"><g id="svgg"><path id="path0" d="M201.384 12.033 C 201.267 12.085,198.632 12.221,195.527 12.336 C 188.364 12.601,187.260 12.942,186.618 15.084 C 186.297 16.156,186.258 56.168,186.577 57.280 C 187.180 59.383,188.434 59.746,193.936 59.414 C 200.166 59.037,217.238 58.908,222.790 59.196 C 249.501 60.580,263.643 62.287,282.109 66.354 C 284.452 66.870,288.525 67.731,291.161 68.267 C 296.812 69.416,297.278 69.533,302.313 71.049 C 310.497 73.513,324.232 79.530,329.286 82.866 C 330.399 83.601,332.643 85.007,334.273 85.992 C 347.504 93.982,352.542 104.757,348.641 116.720 C 346.666 122.774,342.369 127.077,330.355 135.030 C 324.446 138.942,314.166 143.591,307.304 145.455 C 305.630 145.909,301.251 147.161,297.573 148.235 C 277.012 154.243,255.786 157.610,228.647 159.168 C 222.737 159.507,198.699 159.506,193.078 159.166 C 173.806 158.001,171.604 157.695,169.895 155.945 C 168.225 154.235,168.383 161.094,168.264 85.091 C 168.163 20.650,168.138 17.110,167.781 16.457 C 167.015 15.055,165.730 14.775,162.036 15.206 C 160.483 15.387,158.062 15.639,156.656 15.766 C 149.420 16.419,135.708 19.267,124.920 22.358 C 114.335 25.391,110.403 26.677,101.761 29.931 C 81.966 37.383,79.604 38.537,65.223 47.778 C 63.616 48.811,60.924 50.489,59.241 51.506 C 57.251 52.709,55.428 54.024,54.022 55.272 C 52.834 56.326,50.808 58.114,49.520 59.245 C 48.232 60.377,44.969 63.540,42.269 66.274 L 37.361 71.246 34.466 75.719 C 26.594 87.885,24.028 94.872,22.882 107.254 C 21.600 121.113,31.027 141.524,44.863 154.846 C 52.297 162.003,66.541 172.228,68.841 172.056 C 69.507 172.007,69.818 171.850,70.160 171.390 L 70.607 170.789 70.727 138.696 C 70.856 103.850,70.782 105.976,71.994 102.335 C 73.741 97.087,79.817 90.215,85.654 86.887 C 86.750 86.263,88.828 84.957,90.272 83.986 C 96.504 79.796,114.098 71.992,117.314 71.992 C 118.593 71.991,119.889 72.549,120.379 73.310 C 121.345 74.808,121.293 71.741,121.406 134.079 L 121.512 192.865 122.003 193.720 C 123.214 195.832,126.211 196.770,137.700 198.633 C 140.277 199.051,144.063 199.765,146.113 200.220 C 150.027 201.089,154.499 201.878,158.786 202.454 C 160.192 202.643,162.508 202.985,163.932 203.214 C 166.260 203.588,168.907 203.880,179.979 204.988 C 189.877 205.979,213.908 206.525,223.855 205.986 C 226.257 205.856,230.138 205.649,232.481 205.527 C 237.986 205.240,251.689 203.832,258.360 202.869 C 266.760 201.656,270.172 201.048,276.145 199.701 C 277.433 199.410,280.700 198.829,283.404 198.410 C 286.108 197.990,289.271 197.416,290.433 197.133 C 295.075 196.003,306.855 192.503,309.831 191.369 C 311.570 190.707,314.184 189.739,315.640 189.217 C 321.293 187.191,325.733 185.380,329.925 183.389 C 332.327 182.249,335.925 180.681,337.920 179.904 C 342.463 178.137,347.410 175.286,357.188 168.804 C 360.404 166.672,361.303 166.013,367.655 161.129 C 388.214 145.320,400.669 119.206,396.387 100.889 C 394.064 90.954,391.722 85.644,385.350 75.872 C 381.141 69.416,377.890 65.918,368.264 57.490 C 363.395 53.227,363.567 53.351,356.550 49.000 C 353.094 46.857,348.972 44.280,347.391 43.274 C 339.893 38.504,326.221 32.577,308.946 26.607 C 295.184 21.852,273.409 16.719,262.939 15.763 C 261.534 15.634,259.281 15.392,257.934 15.225 C 256.587 15.058,254.382 14.817,253.035 14.690 C 251.688 14.563,247.519 14.134,243.770 13.736 C 235.533 12.862,232.544 12.628,225.879 12.334 C 220.548 12.098,201.755 11.867,201.384 12.033 " stroke="none" fill="#070707" fillRule="evenodd"></path><path id="path1" d="M213.738 80.213 C 207.070 81.184,202.712 82.865,199.148 85.840 C 198.152 86.672,196.643 87.930,195.794 88.636 C 185.441 97.245,184.627 116.454,194.179 126.731 C 200.149 133.153,203.719 135.283,211.014 136.772 C 225.801 139.790,241.094 129.204,243.811 114.070 C 245.731 103.374,241.446 91.905,233.344 86.056 C 227.667 81.958,219.162 79.423,213.738 80.213 " stroke="none" fill="#ca262d" fillRule="evenodd"></path></g></svg>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Norsk Display
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
			<Box sx={{ flexGrow: 1 }} padding="1">
				<Container style={{ paddingTop: "1em" }}>
					<Outlet />
				</Container>
			</Box>
			<Drawer
				anchor="left"
				open={isOpen}
				onClose={close}
			>
				<Box
					role="presentation"
					onClick={close}
					onKeyDown={close}
					style={{ width: "300px" }}
				>
					<List>
						<ListItem disablePadding>
							<ListItemButton onClick={() => navigate("/")}>
								<ListItemIcon>
									<HomeIcon />
								</ListItemIcon>
								<ListItemText primary="Home" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton onClick={() => navigate("settings")}>
								<ListItemIcon>
									<SettingsIcon />
								</ListItemIcon>
								<ListItemText primary="Configuration" />
							</ListItemButton>
						</ListItem>
					</List>
				</Box>
			</Drawer>
			{isError && <ConfigErrorModal />}
		</ThemeProvider>
	);
}