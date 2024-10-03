import React from 'react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	// Stack
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
import MemberList from './MemberList'
const MemberModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
		const [scrollBehavior] = React.useState('inside')
	  
		const btnRef = React.useRef(null)
		return (
		  <>
			
	  
			<Button mt={3} width={'100%'} ref={btnRef} onClick={onOpen}>
			  All member
			</Button>
	  
			<Modal
			size={'xl'}
			  onClose={onClose}
			  finalFocusRef={btnRef}
			  isOpen={isOpen}
			  scrollBehavior={scrollBehavior}
			>
			  <ModalOverlay />
			  <ModalContent >
				<ModalHeader>All member</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
			  <MemberList/>
				</ModalBody>
				<ModalFooter>
				  <Button onClick={onClose}>Close</Button>
				</ModalFooter>
			  </ModalContent>
			</Modal>
		  </>
		)
	  }


export default MemberModal
