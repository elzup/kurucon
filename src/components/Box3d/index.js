// @flow

import * as React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import type { Box } from '../../types'

type Props = {
	box: Box,
}

type State = {
	cubeRotation: any,
}

const cameraPosition = new THREE.Vector3(0, 0, 5)

class Box3d extends React.Component<Props, State> {
	state = {
		cubeRotation: new THREE.Euler(0.2, 0.1, 1),
	}

	_onAnimate = () => {
		this.setState({
			cubeRotation: new THREE.Euler(
				(this.props.box.pit.rate * Math.PI * 2) / 100,
				(this.props.box.rol.rate * Math.PI * 2) / 100,
				(this.props.box.yaw.rate * Math.PI * 2) / 100,
			),
		})
	}

	render() {
		const width = window.innerWidth / 2 // canvas width
		const height = window.innerHeight / 2 // canvas height

		return (
			<React3
				mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
				width={width}
				height={height}
				onAnimate={this._onAnimate}
			>
				<scene>
					<perspectiveCamera
						name="camera"
						fov={75}
						aspect={width / height}
						near={0.1}
						far={1000}
						position={cameraPosition}
					/>
					<mesh rotation={this.state.cubeRotation}>
						<boxGeometry width={1} height={4} depth={1} />
						<meshBasicMaterial color={0x00ff00} />
					</mesh>
				</scene>
			</React3>
		)
	}
}
export default Box3d
