package com.poscodx.customerproject.service;

import com.poscodx.customerproject.exception.CustomerAlreadyExistsException;
import com.poscodx.customerproject.exception.CustomerNotFoundException;
import com.poscodx.customerproject.model.Customer;
import com.poscodx.customerproject.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;

    @Override
    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer addCustomer(Customer customer) {
        if (customerAlreadyExists(customer.getEmail())) {
            throw new CustomerAlreadyExistsException(customer.getEmail() + "Already Exist Email");
        }
        return customerRepository.save(customer);
    }


    @Override
    public Customer updateCustomer(Customer customer, Long id) {
        return customerRepository.findById(id).map(cu -> {
            cu.setName(customer.getName());
            cu.setEmail(customer.getEmail());
            cu.setAddress(customer.getAddress());
            cu.setPhoneNumber(customer.getPhoneNumber());
            return customerRepository.save(cu);
        }).orElseThrow(() -> new CustomerNotFoundException("Sorry, this customer could not be found"));
    }

    @Override
    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id)
                .orElseThrow(() -> new CustomerNotFoundException("Sorry, no customer found with the Id"));
    }


    @Override
    public void deleteCustomer(Long id) {
        if (!customerRepository.existsById(id)) {
            throw new CustomerNotFoundException("Sorry, customer not found");
        }
        customerRepository.deleteById(id);
    }


    private boolean customerAlreadyExists(String email) {
        return customerRepository.findByEmail(email).isPresent();
    }

}
