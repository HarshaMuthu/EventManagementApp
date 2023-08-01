package com.example.product;

public class NonPerishableProduct extends Product {
    private String category;

    public NonPerishableProduct(int id, String name, int quantity, double price, String category) {
        super(id, name, quantity, price);
        this.category = category;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return super.toString() + " | Category: " + category;
    }
}