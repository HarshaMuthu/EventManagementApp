package com.example.product;

public class PerishableProduct extends Product {
    private int expiryDays;

    public PerishableProduct(int id, String name, int quantity, double price, int expiryDays) {
        super(id, name, quantity, price);
        this.expiryDays = expiryDays;
    }

    public int getExpiryDays() {
        return expiryDays;
    }

    public void setExpiryDays(int expiryDays) {
        this.expiryDays = expiryDays;
    }

    @Override
    public String toString() {
        return super.toString() + " | " + expiryDays + " days";
    }
}