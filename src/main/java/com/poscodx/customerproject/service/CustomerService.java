package com.poscodx.customerproject.service;

import com.poscodx.customerproject.model.Customer;
import org.springframework.stereotype.Service;

import java.util.List;

public interface CustomerService {

    Customer addCustomer(Customer customer);

    List<Customer> getCustomers();

    Customer updateCustomer(Customer customer, Long id);

    Customer getCustomerById(Long id);

    void deleteCustomer(Long id);
}
