package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.model.Transport;
import com.example.demo.repository.TransportRepository;

@Service
public class TransportService {
	@Autowired
	TransportRepository repository;
	public String addTransport(Transport transport) 
	{
		repository.save(transport);
		return "Added";
	}
	public List<Transport> getTransport()
	{
		return repository.findAll();
	}
	public String upadteTransport(Transport transport)
	{
		repository.save(transport);
		return "Updated";
	}
	public String deleteTransportById(int id) {
	    repository.deleteById(id);
	    return "Customer Deleted";
	}
	public List<Transport> getTransportSorted(String field)
	{
		return repository.findAll(Sort.by(Sort.Direction.ASC, field));
	}
	public List<Transport> getTransportWithPagination(@PathVariable int offset, @PathVariable int pageSize)
	{
		Page<Transport> page=repository.findAll(PageRequest.of(offset,pageSize));
		return page.getContent();
	}
	

}
