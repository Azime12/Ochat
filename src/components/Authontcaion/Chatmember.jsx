import React from 'react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	// ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
import Signup from './SignUp'
  
const Chatmember = () => {
	
		const { isOpen, onOpen, onClose } = useDisclosure()
	  
		const initialRef = React.useRef(null)
		const finalRef = React.useRef(null)
	  
		return (
		  <>
			<Button onClick={onOpen} width={'100%'}>Add new member</Button>
			
	  
			<Modal
			  initialFocusRef={initialRef}
			  finalFocusRef={finalRef}
			  isOpen={isOpen}
			  onClose={onClose}
			>
			  <ModalOverlay />
			  <ModalContent >
				<ModalHeader>Create  account</ModalHeader>
				<ModalCloseButton />
				<ModalBody  pb={6}>
				  {/* <FormControl>
					<FormLabel>First name</FormLabel>
					<Input ref={initialRef} placeholder='First name' />
				  </FormControl>
	  
				  <FormControl mt={4}>
					<FormLabel>Last name</FormLabel>
					<Input placeholder='Last name' />
				  </FormControl> */}
				  <Signup/>
				</ModalBody>
	  
				{/* <ModalFooter>
				  <Button colorScheme='blue' mr={3}>
					Save
				  </Button>
				  <Button onClick={onClose}>Cancel</Button>
				</ModalFooter> */}
			  </ModalContent>
			</Modal>
		  </>
		)
	  
}

export default Chatmember
