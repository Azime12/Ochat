import React from 'react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
import Edit from './Edit'
  
const EditModal = ({name,responsiblity,phoneNumber,id}) => {
	
		const { isOpen, onOpen, onClose } = useDisclosure()
	  
		const initialRef = React.useRef(null)
		const finalRef = React.useRef(null)
	  
		return (
		  <>
			<Button onClick={onOpen} width={'100%'}>Update</Button>
			
	  
			<Modal
			  initialFocusRef={initialRef}
			  finalFocusRef={finalRef}
			  isOpen={isOpen}
			  onClose={onClose}
			>
			  <ModalOverlay />
			  <ModalContent >
				<ModalHeader>update user  account</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>
				  <Edit ename={name} eresponsiblity={responsiblity} ephonenumber={phoneNumber} eId={id} />
				 
				</ModalBody>
	  
				
			  </ModalContent>
			</Modal>
		  </>
		)
	  
}

export default EditModal
